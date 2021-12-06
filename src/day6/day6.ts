export type Fish = {
  days: number;
}

export function calculateFishNumberAfter80Days(days: number[]): number {
  let fishArray = days.map(day => ({days: day}));

  let day = 0;
  while (day !== 80) {

    let newFishArray: Fish[] = [];
    fishArray.forEach(fish => {
      if (fish.days > 0) {
        fish.days--;
      } else if (fish.days === 0) {
        fish.days = 6;
        newFishArray.push({days: 8});
      }
    });

    fishArray.push(...newFishArray);
    day++;
  }

  return fishArray.length;
}