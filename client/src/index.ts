import * as d3 from "d3"

import { IDataClass, ISourceData, sourceData } from "#client/sourceData"

type IHierarchyNode = d3.HierarchyNode<IDataClass>

// const WIDTH = 954
// const RADIUS = WIDTH / 2

// const COLOR_IN = "#00f"
// const COLOR_OUT = "#f00"
// const COLOR_NONE = "#ccc"

// const tree = d3.cluster().size([2 * Math.PI, RADIUS - 100])

// const line = d3
//   .lineRadial()
//   .curve(d3.curveBundle.beta(0.85))
//   .angle((d) => d[0])
//   .radius((d) => d[1])

const getId = (node: IHierarchyNode): string => {
  return `${node.parent ? getId(node.parent) + "." : ""}${node.data.name}`
}

// const bilink = (root: unknown) => {
//   const map = new Map(root.leaves().map((d) => [getId(d), d]))
//   for (const d of root.leaves()) (d.incoming = []), (d.outgoing = d.data.imports.map((i) => [d, map.get(i)]))
//   for (const d of root.leaves()) for (const o of d.outgoing) o[1].incoming.push(o)
//   return root
// }

const buildHierarchy = (data: ISourceData) => {
  const DELIMITER = "."
  let root
  const map = new Map()
  const find = (dataClass: IDataClass) => {
    if (map.has(dataClass.name)) return map.get(dataClass.name)
    const lastIndexOfDelimiterInDataClassName = dataClass.name.lastIndexOf(DELIMITER)
    map.set(dataClass.name, dataClass)
    if (lastIndexOfDelimiterInDataClassName === -1) {
      root = data
      return
    }

    find({
      name: dataClass.name.substring(0, lastIndexOfDelimiterInDataClassName),
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      children: [],
    }).children.push(dataClass)
    dataClass.name = dataClass.name.substring(lastIndexOfDelimiterInDataClassName + 1)
  }
  data.forEach(find)
  return root
}

const hierarchy = buildHierarchy(sourceData)

console.log("hierarchy >>", hierarchy)

// const createChart = () => {
//   const root = tree(
//     bilink(
//       d3.hierarchy(data).sort((a, b) => d3.ascending(a.height, b.height) || d3.ascending(a.data.name, b.data.name))
//     )
//   )

//   const svg = d3.create("svg").attr("viewBox", [-WIDTH / 2, -WIDTH / 2, WIDTH, WIDTH])

//   const node = svg
//     .append("g")
//     .attr("font-family", "sans-serif")
//     .attr("font-size", 10)
//     .selectAll("g")
//     .data(root.leaves())
//     .join("g")
//     .attr("transform", (d) => `rotate(${(d.x * 180) / Math.PI - 90}) translate(${d.y},0)`)
//     .append("text")
//     .attr("dy", "0.31em")
//     .attr("x", (d) => (d.x < Math.PI ? 6 : -6))
//     .attr("text-anchor", (d) => (d.x < Math.PI ? "start" : "end"))
//     .attr("transform", (d) => (d.x >= Math.PI ? "rotate(180)" : null))
//     .text((d) => d.data.name)
//     .each(function (d) {
//       d.text = this
//     })
//     .on("mouseover", overed)
//     .on("mouseout", outed)
//     .call((text) =>
//       text.append("title").text(
//         (d) => `${getId(d)}
// ${d.outgoing.length} outgoing
// ${d.incoming.length} incoming`
//       )
//     )

//   const link = svg
//     .append("g")
//     .attr("stroke", COLOR_NONE)
//     .attr("fill", "none")
//     .selectAll("path")
//     .data(root.leaves().flatMap((leaf) => leaf.outgoing))
//     .join("path")
//     .style("mix-blend-mode", "multiply")
//     .attr("d", ([i, o]) => line(i.path(o)))
//     .each(function (d) {
//       d.path = this
//     })

//   const overed = (event, d) => {
//     link.style("mix-blend-mode", null)
//     d3.select(this).attr("font-weight", "bold")
//     d3.selectAll(d.incoming.map((d) => d.path))
//       .attr("stroke", COLOR_IN)
//       .raise()
//     d3.selectAll(d.incoming.map(([d]) => d.text))
//       .attr("fill", COLOR_IN)
//       .attr("font-weight", "bold")
//     d3.selectAll(d.outgoing.map((d) => d.path))
//       .attr("stroke", COLOR_OUT)
//       .raise()
//     d3.selectAll(d.outgoing.map(([, d]) => d.text))
//       .attr("fill", COLOR_OUT)
//       .attr("font-weight", "bold")
//   }

//   function outed(event, d) {
//     link.style("mix-blend-mode", "multiply")
//     d3.select(this).attr("font-weight", null)
//     d3.selectAll(d.incoming.map((d) => d.path)).attr("stroke", null)
//     d3.selectAll(d.incoming.map(([d]) => d.text))
//       .attr("fill", null)
//       .attr("font-weight", null)
//     d3.selectAll(d.outgoing.map((d) => d.path)).attr("stroke", null)
//     d3.selectAll(d.outgoing.map(([, d]) => d.text))
//       .attr("fill", null)
//       .attr("font-weight", null)
//   }

//   return svg.node()
// }

// console.log(createChart())
