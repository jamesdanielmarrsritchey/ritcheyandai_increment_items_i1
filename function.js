function increment_permutation(items, permutation) {
    // Map permutation to indices
    let nums = permutation.map(item => items.indexOf(item));

    // Increment the number in mixed radix numeral system
    let i = nums.length - 1;
    while (i >= 0 && nums[i] === items.length - 1) {
        nums[i] = 0;
        i--;
    }
    if (i >= 0) {
        nums[i]++;
    } else {
        nums.unshift(0);
    }

    // Map indices back to items
    return nums.map(index => items[index]);
}