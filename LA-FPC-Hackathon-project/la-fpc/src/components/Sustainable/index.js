import React, { Component } from "react"
import { withRouter } from "react-router-dom"
import SustainableData from "./SustainableData"
import EditSustainable from "./EditSustainable"
import SearchBar from '../SearchBar'
// import Donut from "./SustainableChart"
import NewSustainableChart from "./NewSustainableChart"
import Button from "@material-ui/core/Button"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"

import {
  Container,
  DivDataModal,
  ContainModal,
  Table,
  Row,
  TableData,
  TableDataHeader,
  TableDataButton,
  H1,
  P,
  ChartDiv,
  ToolKit
} from "./style"

import { DescribSec, DescribPar } from "./style"

class Sustainable extends Component {
  state = {
    sustainableData: [],
    showEditModal: false,
    showDataModal: false,
    dataModalProperty: "",
    editData: {
      _id: null,
      value: "sustainable",
      indicator: "",
      baseline: "",
      update: "",
      sources: "",
      change: "",
      notes: "",
      dataStatus: "",
      group: "",
      error: ""
    },
    currentData: {}
  }

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    try {
      const data = await fetch(`http://localhost:3030/data/get-data`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        }
      })
      const oldData = await data.json()
      const sustainData = oldData.data.filter(
        data => data.value === "sustainable"
      )
      console.log("hitting", sustainData[0])
      this.setState({
        sustainableData: sustainData,
        currentData: sustainData[0]
      })
    } catch (err) {
      console.log(err)
    }
  }

  addData = async data => {
    try {
      const addDataResponse = await fetch(
        `http://localhost:3030/data/add-data`,
        {
          method: "POST",
          credentials: "include",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      const parsedResponse = await addDataResponse.json()
      this.setState({
        sustainableData: [...this.state.sustainableData, parsedResponse.data]
      })
    } catch (err) {
      console.log(err, "this is error from add data")
    }
  }

  handleFormChange = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        [e.target.name]: e.target.value
      }
    })
  }

  closeAndEdit = async e => {
    e.preventDefault()
    try {
      const editRequest = await fetch(
        `http://localhost:3030/data/${this.state.editData._id}/update-data`,
        {
          method: "PUT",
          credentials: "include",
          body: JSON.stringify(this.state.editData),
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
      if (editRequest.status !== 200) {
        throw Error("editResquest not working")
      }
      const editResponse = await editRequest.json()
      const editDataArray = this.state.sustainableData.map(data => {
        if (data._id === editResponse.data._id) {
          data = editResponse.data
        }
        return data
      })
      this.setState({
        sustainableData: editDataArray,
        showEditModal: false
      })
      this.props.history.push("/sustainable")
    } catch (err) {
      console.log(err, " error closeAndEdit")
      return err
    }
  }

  editData = data => {
    this.setState({
      showEditModal: !this.showEditModal,
      editData: data
    })
  }

  cancelEdit = () => {
    this.setState({
      showEditModal: false
    })
  }

  delete = async id => {
    try {
      const deleteData = await fetch(`http://localhost:3030/data/${id}`, {
        method: "DELETE",
        credentials: "include"
      })
      if (deleteData.status !== 200) {
        throw Error("Something happend on delete")
      }
      const deleteDataJson = await deleteData.json()
      this.setState({
        sustainableData: this.state.sustainableData.filter(
          data => data._id !== id
        )
      })
    } catch (err) {
      console.log(err)
      return err
    }
  }

  closeDataModal = () => {
    this.setState({
      showDataModal: false
    })
  }

  showData = currentData => {
    // this.setState({
    //   showDataModal: !this.state.showDataModal,
    //   dataModalProperty: e.target.textContent
    // })
    this.setState({
      currentData
    })
  }
  handleForce = async (file) => {
    const holder = []
    for (let i = 1; i < file.length; i++) {
      const newObj = {
        [file[0][0]]: file[i][0],
        [file[0][1]]: file[i][1],
        [file[0][2]]: file[i][2],
        [file[0][3]]: file[i][3],
        [file[0][4]]: file[i][4],
        [file[0][5]]: file[i][5],
      }
      holder.push(newObj)
    }
    console.log(holder, "<-----------------------------------holder")
    try {
      const whatsThis = await (await (fetch(`http://localhost:3030/data/addingcsv`, {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(holder),
        headers: {
          'Content-Type': 'application/json'
        }
      }))).json()
      console.log(whatsThis, "<-------------------------this is?")
    } catch (err) {
      console.log(err)
    }
    // file[1].map((e, i) => {
    //   const array = Object.assign(...file[0].map(key => ({
    //     [key]: e
    //   })));
    //   console.log(array, "<---------------------------------------")
    // }
    // )
  }

  render() {
    const {
      sustainableData,
      editData,
      showEditModal,
      showDataModal,
      dataModalProperty,
      currentData
    } = this.state
    const { isLogged } = this.props.isLogged
    return (
      <Container>
        <DescribSec>
          <h1>Sustainable</h1>
          <DescribPar>
            Food is integral to the health and quality of life of individuals
            and communities. Healthy food is nutritious, delicious and safe.
            Healthy food meets recommended dietary guidelines and supports the
            body’s ability to fight disease and heal. All people deserve access
            to healthy food that is affordable, conveniently availability and
            culturally relevant.
          </DescribPar>

          <DescribPar>
            Not all communities live in neighborhoods where the healthy choice
            is the easy choice, and instead are surrounded by unhealthy food
            retail such as liquor stores, convenience stores and fast food
            restaurants. Through the numerous policy, systems and environmental
            changes led by stakeholders throughout the LAFPC network, we are
            collectively innovating solutions for overcoming systemic barriers
            to healthy food access— tailoring these innovations to the unique
            dynamics of the communities that we serve.
          </DescribPar>

          <DescribPar>
            In this section, we explore progress towards improving the health of
            ALL Angelenos by evaluating disparities and change over time in the
            following categories: Increased healthy food access, Improved eating
            habits amongst adults & children, Rates of obesity, Rates of
            diet-related diseases.
          </DescribPar>
        </DescribSec>
        {showEditModal ? (
          <EditSustainable
            cancelEdit={this.cancelEdit}
            closeAndEdit={this.closeAndEdit}
            editData={editData}
            handleFormChange={this.handleFormChange}
          />
        ) : null}
        {showDataModal ? (
          <DivDataModal onClick={() => this.closeDataModal()}>
            <ContainModal>{dataModalProperty}</ContainModal>
          </DivDataModal>
        ) : null}
        {Object.keys(currentData).length ? (
          <ToolKit>
            <NewSustainableChart
              sustainableData={sustainableData}
              currentData={currentData}
            />
          </ToolKit>
        ) : null}
        <SearchBar searching={this.state} />
        <Row>
          {this.props.isLogged ? (
            <TableDataHeader>ADMIN</TableDataHeader>
          ) : null}
          <TableDataHeader>
            <H1>Indicator</H1>
          </TableDataHeader>
          <TableDataHeader>
            <H1>2013</H1>
          </TableDataHeader>
          <TableDataHeader>
            <H1>2017</H1>
          </TableDataHeader>
          <TableDataHeader>
            <H1>2020</H1>
          </TableDataHeader>
        </Row>
        <Table>
          {/* <Row>
            {this.props.isLogged ? (
              <TableDataHeader>ADMIN</TableDataHeader>
            ) : null}
            <TableDataHeader>
              <H1>Indicator</H1>
            </TableDataHeader>
            <TableDataHeader>
              <H1>2013</H1>
            </TableDataHeader>
            <TableDataHeader>
              <H1>2017</H1>
            </TableDataHeader>
            <TableDataHeader>
              <H1>2020</H1>
            </TableDataHeader>
          </Row> */}
          {sustainableData.map((data, i) => {
            return (
              <Row key={i}>
                {this.props.isLogged ? (
                  <TableDataButton>
                    <Button onClick={() => this.editData(data)}>
                      <EditIcon />
                    </Button>
                    <Button onClick={() => this.delete(data._id)}>
                      <DeleteIcon />
                    </Button>
                  </TableDataButton>
                ) : null}
                <TableData onClick={() => this.showData(data)}>
                  <P>{data.indicator}</P>
                </TableData>
                <TableData onClick={() => this.showData(data)}>
                  <P>{data[2013]}</P>
                </TableData>
                <TableData onClick={() => this.showData(data)}>
                  <P>{data[2017]}</P>
                </TableData>
                <TableData onClick={() => this.showData(data)}>
                  <P>{data[2020]}</P>
                </TableData>
              </Row>
            )
          })}
        </Table>
        {this.props.isLogged ? (
          <div style={{ position: "relative", top: "10px" }}>
            <SustainableData addData={this.addData} />
            <CSVReader
              cssClass="csv-reader-input"
              label="Upload"
              onFileLoaded={this.handleForce}
              onError={this.handleDarkSideForce}
              inputId="ObiWan"
              inputStyle={{ color: 'red' }}
            />
          </div>
        ) : null}
        <ChartDiv>
          {/* <ToolKit>
            <Button
              style={{ backgroundColor: "#8BC147", marginTop: "10px" }}
              fullWidth
            >
              Number of Properties
            </Button>
            <Button
              style={{ backgroundColor: "#8BC147", marginTop: "10px" }}
              fullWidth
            >
              Grocery Stores
            </Button>
            <Button
              style={{ backgroundColor: "#8BC147", marginTop: "10px" }}
              fullWidth
            >
              Food Consumption
            </Button>
            <Button
              style={{ backgroundColor: "#8BC147", marginTop: "10px" }}
              fullWidth
            >
              Obesity Percentage
            </Button>
            <Button
              style={{ backgroundColor: "#8BC147", marginTop: "10px" }}
              fullWidth
            >
              Health Diagnosis Percentage
            </Button>
          </ToolKit> */}

          {/* {Object.keys(currentData).length ? (
            <ToolKit> */}
          {/* <Donut sustainableData={this.state.sustainableData} /> */}
          {/* <NewSustainableChart
                sustainableData={sustainableData}
                currentData={currentData}
              />
            </ToolKit>
          ) : null} */}
        </ChartDiv>
      </Container>
    )
  }
}

export default withRouter(Sustainable)
