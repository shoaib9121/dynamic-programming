function findSuspiciousIds(logs, threashold) {
  /**
   * Convert ['88 99 200', '88 99 300', '99 32 100', '12 12 15']
   * to
   * [ '88 99', '88 99', '99 32', '12 12' ]
   */
  let truncated = logs.map((log) => log.substring(0, log.lastIndexOf(" ")));

  let mapper = new Map();
  truncated.forEach((item) => {
    if (
      mapper.get(item.split(" ")[0]) &&
      mapper.get(item.split(" ")[0]) !== mapper.get(item.split(" ")[1])
    ) {
      mapper.set(item.split(" ")[0], {
        id: item.split(" ")[0],
        count: ++mapper.get(item.split(" ")[0]).count,
      });
    } else {
      mapper.set(item.split(" ")[0], {
        id: mapper.get(item.split(" ")[0]),
        count: 1,
      });
    }
    if (
      mapper.get(item.split(" ")[1]) &&
      mapper.get(item.split(" ")[0]) !== mapper.get(item.split(" ")[1])
    ) {
      mapper.set(item.split(" ")[1], {
        id: item.split(" ")[1],
        count: ++mapper.get(item.split(" ")[1]).count,
      });
    } else {
      mapper.set(item.split(" ")[1], {
        id: item.split(" ")[1],
        count: 1,
      });
    }
  });

  let filtered = [];
  mapper.forEach((value, key) => {
    if (value.count >= threashold) {
      filtered.push(key);
    }
  });
  return filtered.sort((a, b) => a - b);
}

console.log(
  findSuspiciousIds(["88 99 200", "88 99 300", "99 32 100", "12 12 15"], 2)
);
