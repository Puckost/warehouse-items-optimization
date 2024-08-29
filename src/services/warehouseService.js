/**
 * Service that optimizes the selection of warehouse items.
 * Optimization gives items with lower priority number advantage
 * while respecting other properties like item dependencies and higher value.
 */
class WarehouseService {

  /**
   * Checks if all dependencies of the current item are in selected items.
   * @param {Set} selectedItems - Set of item names that have already been selected.
   * @param {Array} dependencies - Array of item names that the current item depends on.
   * @returns {boolean} - True if all dependencies are met, otherwise false.
   */
  dependenciesMet(selectedItems, dependencies) {
    return dependencies.every(dependency => selectedItems.has(dependency));
  }

  /**
   * Method that optimizes items selection for the warehouse.
   * It gives items with lower priority number advantage
   * while respecting other properties like item dependencies and higher value.
   * @returns {Object} - The optimal selection of items along with their total value and size.
   */
  optimizeItems() {
    // Initialize a map to store different states of item selection
    const itemsMap = new Map();
    // Set first default map entry
    itemsMap.set('0-0', {
      totalValue: 0,       // Total value of selected items
      totalSize: 0,        // Total size of selected items
      selectedItems: new Set(), // Set of names of selected items
      totalPriority: 0     // Sum of priorities of selected items
    });

    // Now iterate trough each warehouse item
    for (let i = 0; i < this.items.length; i++) {
      const currentItem = this.items[i];
      const newItemsMap = new Map(itemsMap); // Create a copy of the current itemsMap

      // Now iterate through each warehouse item in the itemsMap
      for (let [key, value] of itemsMap.entries()) {
        // Extract current space from the key
        const [_, currentSpace] = key.split('-').map(Number);

        // Skip the current item if it exceeds the remaining space
        if (currentItem.size <= this.totalSpace - currentSpace) {
          const newSelectedItems = new Set(value.selectedItems);

          // Check if all dependencies of the current item are met
          if (this.dependenciesMet(newSelectedItems, currentItem.dependencies)) {
            newSelectedItems.add(currentItem.name);  // Add current item to the selection
            const newSpace = currentSpace + currentItem.size; // Calculate new total space used
            const newValue = value.totalValue + currentItem.value; // Calculate new total value
            const newPriority = value.totalPriority + currentItem.priority; // Update total priority

            const newKey = `${i + 1}-${newSpace}`; // Create a new key for this state

            // Check if this new state should be added to the newItemsMap
            if (!newItemsMap.has(newKey) ||
              newItemsMap.get(newKey).totalPriority < newPriority ||
              (newItemsMap.get(newKey).totalPriority === newPriority && newItemsMap.get(newKey).totalValue < newValue)
            ) {
              newItemsMap.set(newKey, {
                totalValue: newValue,
                totalSize: newSpace,
                selectedItems: newSelectedItems,
                totalPriority: newPriority
              });
            }
          }
        }
      }

      // Update itemsMap with the new states
      itemsMap.clear();
      for (let [key, value] of newItemsMap.entries()) {
        itemsMap.set(key, value);
      }
    }

    // Determine the best result from all possible states
    let maxResult = {
      totalValue: 0,
      totalSize: 0,
      selectedItems: [],
      totalPriority: Infinity
    };
    for (let value of itemsMap.values()) {
      if (
        value.totalValue > maxResult.totalValue ||
        (value.totalValue === maxResult.totalValue && value.totalPriority < maxResult.totalPriority)
      ) {
        maxResult = value;
      }
    }

    // Convert the set of selected item names back to an array of item objects
    const selectedItemsList = Array.from(maxResult.selectedItems).map(itemName =>
      this.items.find(item => item.name === itemName)
    );

    // Return the result with the optimal selection of items
    return {
      totalValue: maxResult.totalValue,
      totalSize: maxResult.totalSize,
      selectedItems: selectedItemsList
    };
  }

  /**
   * Get method for calculating optimal warehouse items.
   * It sorts the items by priority and then runs the optimization algorithm.
   * @param {Array} items - List of items to be considered for selection.
   * @param {number} totalSpace - Total available space in the warehouse.
   * @returns {Object} - The optimal selection of items along with their total value and size.
   */
  getOptimalItems(items, totalSpace) {
    this.totalSpace = totalSpace;  // Set total space as class variable
    // Sort items by priority, lower number means higher priority
    this.items = items.sort((a, b) => a.priority - b.priority);
    return this.optimizeItems();  // Run the optimization process
  }
}

module.exports = WarehouseService;
