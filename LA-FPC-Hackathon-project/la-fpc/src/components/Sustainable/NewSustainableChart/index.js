import React, { Component } from "react"
import Canvas from "./style"
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts"
import domtoimage from "dom-to-image"
import { saveAs } from "file-saver"
import FPCLogo from "./FPCLogo.png"
import Button from "@material-ui/core/Button"

class NewSustainableChart extends Component {
  state = {
    data: []
  }

  savePng = () => {
    const { data } = this.state

    domtoimage
      .toBlob(document.getElementById("graph-to-save"), {
        filter: node => node.id !== "button-to-ignore"
      })
      .then(blob => saveAs(blob, `LAPFC ${data.indicator}.png`))
  }

  componentDidMount() {
    const { currentData } = this.props
    // const data = [
    //   {
    //     name: "2013",
    //     [currentData.indicator]: currentData[2013],
    //     amt: currentData[2013] + 1
    //   },
    //   {
    //     name: "2017",
    //     [currentData.indicator]: currentData[2017],
    //     amt: currentData[2017] + 1
    //   },
    //   {
    //     name: "2020",
    //     [currentData.indicator]: currentData[2020],
    //     amt: currentData[2020] + 1
    //   }
    // ]
    this.setState({
      data: currentData
    })
  }

  componentDidUpdate() {
    const { currentData } = this.props
    // const data = [
    //   {
    //     name: "2013",
    //     [currentData.indicator]: currentData[2013],
    //     amt: currentData[2013] + 1
    //   },
    //   {
    //     name: "2017",
    //     [currentData.indicator]: currentData[2017],
    //     amt: currentData[2017] + 1
    //   },
    //   {
    //     name: "2020",
    //     [currentData.indicator]: currentData[2020],
    //     amt: currentData[2020] + 1
    //   }
    // ]

    this.setState({
      data: currentData
    })
  }

  shouldComponentUpdate() {
    return this.props.currentData !== this.state.data
  }

  render() {
    const { data } = this.state
    // const { currentData } = this.props

    console.log(data)
    const dataToRender = [
      {
        name: "2013",
        [data.indicator]: data[2013],
        amt: data.datatype === "percent" ? 100 : data[2013]
      },
      {
        name: "2017",
        [data.indicator]: data[2017],
        amt: data.datatype === "percent" ? 100 : data[2017]
      },
      {
        name: "2020",
        [data.indicator]: data[2020],
        amt: data.datatype === "percent" ? 100 : data[2020]
      }
    ]
    return (
      <Canvas id="graph-to-save">
        <div className="bg">
          <div className="title-div">
            <img src={FPCLogo} style={({ width: "4em" }, { height: "4em" })} />
            <h2>LAPFC Food System Dashboard</h2>
            <h2 style={{ color: "#78c930" }}>{data.indicator}</h2>
            <Button id="button-to-ignore" onClick={this.savePng}>
              Save Result
            </Button>
          </div>
          <BarChart
            width={1200}
            height={650}
            data={dataToRender}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            {/* <Legend /> */}
            <Bar dataKey={data.indicator} fill="#78c930" />
          </BarChart>
          <div></div>
          <div className="title-div bottom-div">
            {data.datatype === "percent" ? (
              <h3>{data[2013]}%</h3>
            ) : (
              <h3>{data[2013]}</h3>
            )}
            {data.datatype === "percent" ? (
              <h3>{data[2017]}%</h3>
            ) : (
              <h3>{data[2017]}</h3>
            )}
            {data.datatype === "percent" ? (
              <h3>{data[2020]}%</h3>
            ) : (
              <h3>{data[2020]}</h3>
            )}
          </div>
        </div>
      </Canvas>
    )
  }
}

export default NewSustainableChart
