/**
 * @param {number[][]} grid
  * @return {number[]}
   */
   var findMissingAndRepeatedValues = function(grid) {
       const n = grid.length;
           const count = new Array(n * n + 1).fill(0);
               for (const row of grid) {
                       for (const val of row) {
                                   count[val]++;
                                           }
                                               }
                                                   let repeated = 0, missing = 0;
                                                       for (let i = 1; i <= n * n; i++) {
                                                               if (count[i] === 2) repeated = i;
                                                                       if (count[i] === 0) missing = i;
                                                                           }
                                                                               return [repeated, missing];
                                                                               };