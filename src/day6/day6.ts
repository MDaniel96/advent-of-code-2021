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

export function calculateFishNumberAfterPeriod(days: number[], period: number): number {
  let fishCount = new Map<number, number>();
  for (let i = 0; i <= 8; i++) {
    fishCount.set(i, 0);
  }
  days.forEach(day => fishCount.set(day, fishCount.get(day)! + 1));

  let day = 0;
  while (day !== period) {
    let bornNumber = fishCount.get(0)!;
    for (let i = 1; i <= 8; i++) {
      fishCount.set(i - 1, fishCount.get(i)!);
    }
    fishCount.set(8, 0);
    fishCount.set(6, fishCount.get(6)! + bornNumber);
    fishCount.set(8, fishCount.get(8)! + bornNumber);
    day++;
  }

  return Array.from(fishCount.values())
    .reduce((sum, value) => sum + value, 0);
}