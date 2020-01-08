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
import FPCLogo from "./FPCLogo.png"

class NewSustainableChart extends Component {
  state = {
    data: []
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

    const dataToRender = [
      {
        name: "2013",
        [data.indicator]: data[2013],
        amt: data[2013] + 1
      },
      {
        name: "2017",
        [data.indicator]: data[2017],
        amt: data[2017] + 1
      },
      {
        name: "2020",
        [data.indicator]: data[2020],
        amt: data[2020] + 1
      }
    ]
    return (
      <Canvas>
        <div className="title-div">
          <img src={FPCLogo} style={({ width: "4em" }, { height: "4em" })} />
          <h2>LAPFC Food System Dashboard</h2>
          <h2 style={{ color: "#78c930" }}>{data.indicator}</h2>
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
          <h3>{data[2013]}</h3>
          <h3>{data[2017]}</h3>
          <h3>{data[2020]}</h3>
        </div>
      </Canvas>
    )
  }
}

export default NewSustainableChart
