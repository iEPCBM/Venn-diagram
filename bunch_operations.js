class SetOperations {
  static union(a, b) {
    return new Set([...a, ...b]);
  }

  static intersection (a, b) {
    return new Set([...a].filter(c => b.has(c)));
  }

  static difference (a, b) {
    return new Set([...a].filter(c => !b.has(c)));
  }

  static symmetricDifference (a, b) {
    const x = [...a].filter(c => !b.has(c));
    const y = [...b].filter(c => !a.has(c));

    return new Set(x.concat(y));
  }
}
