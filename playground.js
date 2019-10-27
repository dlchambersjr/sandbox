const dfs = (source, graph, length, path = []) => {
  if (path.length === length) {
    return path.concat(source);
  }
  let neighbours = graph[source] || [];

  for (let neighbourKey in neighbours) {
    const neighbour = neighbours[neighbourKey];
    let newList = neighbours.slice();
    newList.splice(neighbours.indexOf(neighbour), 1);
    graph[source] = newList;
    const result = dfs(neighbour, graph, length, path.concat(source));
    if (result.length) {
      return result;
    }
    graph[source] = newList.concat(neighbour);
  }

  return [];
};

const constructGraph = tickets => {
  const graph = tickets.reduce((graph, ticket) => {
    const [from, to] = ticket;
    console.log(from, to);
    const neighbours = graph[from] || [];
    console.log(neighbours.concat(to));
    graph[from] = neighbours.concat(to);
    console.log(graph[from]);
    return graph;
  }, {});

  for (let source in graph) {
    const destinations = graph[source];
    destinations.sort();
    console.log(destinations)
  }
  return graph;
};
const findItinerary = tickets => {
  const graph = constructGraph(tickets);
  const path = dfs("JFK", graph, tickets.length, []);
  console.log(path)
  if (path) {
    return path;
  }
};

console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]))