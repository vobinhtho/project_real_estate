import { Button, Grid, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@material-ui/core";
import { makeStyles, mergeClasses } from "@material-ui/styles";
import moment from "moment";
import React, { useState,useEffect } from "react";
import Chart from "react-google-charts";
import { BsFillPieChartFill, BsStar } from "react-icons/bs";
import { IoStatsChart } from "react-icons/io5";
import { useSelector } from "react-redux";
import { getContracts } from "../../store/actions/contractAction";
import { useDispatch } from "react-redux";
import { getRealEstates } from "../../store/actions/realEstateAction";


const useStyles = makeStyles({
  title: {
    fontSize:30,
    color:'#294bb7',
    marginBottom:40,
    marginTop:40
  },
  title1:{
    fontSize:30,
    color:'#294bb7',
  }
});
const pieOptions = {
    title: "",
    pieHole: 0.0,
    slices: [
      {
        color: "#78d237"
      },
      {
        color: "#fe8a2e"
      },
      {
        color: "#ae30ca"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 22
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto",
    // content:{
    //   marginRight:10
    // }
  };
  
// const data = [
//     ["", "Bất động sản theo tháng", { role: "style" }],
//     ["January", 8.94, "#69e"], // RGB value
//     ["February", 8.94, "#ddd"], // RGB value
//     ["March", 10.49, "#69e"], // English color name
//     ["April", 19.3, "#ddd"],
//     ["May", 21.45, "#69e"],
//     ["June", 19.3, "#ddd"],
//     ["July", 19.3, "#69e"],
//     ["August", 19.3, "#ddd"],
//     ["September", 19.3,"#69e"],
//     ["October", 19.3, "#ddd"],
//     ["November", 19.3,"#69e"],
//     ["December", 19.3, "#ddd"]
//   ];
const RealEstateChart=()=>{

    const classes = useStyles();
    const dispatch = useDispatch();

    const fetchItems = () => async dispatch => {
    try {

      dispatch(getContracts());
      dispatch(getRealEstates());
      
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
     dispatch(fetchItems());
    }, [dispatch]);
    // useEffect(() => {
    //   dispatch(getContracts());
    // }, [dispatch]);

    const realEstate = useSelector((state)=>state.realestate);
    const contracts = useSelector((state)=>state.contracts);
    //pie
    const countMP = realEstate.filter(item=>item.news_category==='GÓI TIN MIỄN PHÍ')
    const countVIP = realEstate.filter(item=>item.news_category==='GÓI TIN VIP')
    const countDB = realEstate.filter(item=>item.news_category==='GÓI TIN ĐẶC BIỆT')

    // column
    // realEstate.map(com=>(
    //     console.log(moment(realEstate.post_date).month())
    // ))
    const count1 = realEstate.map(item=>moment(item.post_date).month()===0 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count2 = realEstate.map(item=>moment(item.post_date).month()===1 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count3 = realEstate.map(item=>moment(item.post_date).month()===2 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count4 = realEstate.map(item=>moment(item.post_date).month()===3 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count5 = realEstate.map(item=>moment(item.post_date).month()===4 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count6 = realEstate.map(item=>moment(item.post_date).month()===5 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count7 = realEstate.map(item=>moment(item.post_date).month()===6 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count8 = realEstate.map(item=>moment(item.post_date).month()===7 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count9 = realEstate.map(item=>moment(item.post_date).month()===8 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count10 = realEstate.map(item=>moment(item.post_date).month()===9 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count11= realEstate.map(item=>moment(item.post_date).month()===10 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)
    const count12 = realEstate.map(item=>moment(item.post_date).month()===11 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0)

    //const sumall = realEstate.map(item => moment(item.post_date).month()===0 && parseFloat(item.price_news)).reduce((prev, curr) => prev + curr, 0 );
    console.log(contracts);  

    const countContract1 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===0 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract2 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===1 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract3 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===2 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract4 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===3 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract5 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===4 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract6 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===5 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract7 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===6 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract8 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===7 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract9 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===8 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract10 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===9 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract11= contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===10 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)
    const countContract12 = contracts.map(item=> item.status==='saved' && moment(item.created_date).month()===11 && (parseFloat(item.value) * parseFloat(item.percent)) / 100 ).reduce((prev, curr) => prev + curr, 0)


    return(
    <div className={classes.content}>
    <br/>
    <Grid container spacing={3} >

      <Grid item xs={12}>
        <Typography  className={classes.title1}><IoStatsChart/> Thống kê bất động sản theo tháng</Typography>
      </Grid>
      

      <Grid item xs={4}>
      <br/>
      <Typography gutterBottom>Bảng thống kê thu nhập từ hợp đồng theo tháng</Typography>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Tháng</TableCell>
                <TableCell>Thu nhập</TableCell>
                <TableCell>Tháng</TableCell>
                <TableCell>Thu nhập</TableCell>
              </TableRow>
            </TableHead>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>01</TableCell>
                <TableCell>{countContract1} VNĐ</TableCell>
                <TableCell>07</TableCell>
                <TableCell>{countContract7} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>02</TableCell>
                <TableCell>{countContract2} VNĐ</TableCell>
                <TableCell>08</TableCell>
                <TableCell>{countContract8} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>03</TableCell>
                <TableCell>{countContract3} VNĐ</TableCell>
                <TableCell>09</TableCell>
                <TableCell>{countContract9} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>04</TableCell>
                <TableCell>{countContract4} VNĐ</TableCell>
                <TableCell>10</TableCell>
                <TableCell>{countContract10} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>05</TableCell>
                <TableCell>{countContract5} VNĐ</TableCell>
                <TableCell>11</TableCell>
                <TableCell>{countContract11} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>06</TableCell>
                <TableCell>{countContract6} VNĐ</TableCell>
                <TableCell>12</TableCell>
                <TableCell>{countContract12} VNĐ</TableCell>
              </TableRow>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={8}>
        <Chart
        chartType="ColumnChart"
        width="100%"
        height="510px"
        data={[
            ["", "Tổng phí hợp đồng bất động sản theo tháng", { role: "style" }],
            ["January", countContract1, "#78d237"], 
            ["February", countContract2, "#ffd246"], 
            ["March", countContract3, "#78d237"], 
            ["April", countContract4, "#ffd246"],
            ["May", countContract5, "#78d237"],
            ["June", countContract6, "#ffd246"],
            ["July", countContract7, "#78d237"],
            ["August", countContract8, "#ffd246"],
            ["September", countContract9,"#78d237"],
            ["October", countContract10, "#ffd246"],
            ["November", countContract11,"#78d237"],
            ["December", countContract12, "#ffd246"]
          ]}
        />
      </Grid>
      

      
      <Grid item xs={4}>
      <br/>
      <Typography gutterBottom>Bảng thống kê thu nhập phí đăng tin theo tháng</Typography>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell>Tháng</TableCell>
                <TableCell>Thu nhập</TableCell>
                <TableCell>Tháng</TableCell>
                <TableCell>Thu nhập</TableCell>
              </TableRow>
            </TableHead>
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>01</TableCell>
                <TableCell>{count1} VNĐ</TableCell>
                <TableCell>07</TableCell>
                <TableCell>{count7} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>02</TableCell>
                <TableCell>{count2} VNĐ</TableCell>
                <TableCell>08</TableCell>
                <TableCell>{count8} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3</TableCell>
                <TableCell>03</TableCell>
                <TableCell>{count3} VNĐ</TableCell>
                <TableCell>09</TableCell>
                <TableCell>{count9} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>4</TableCell>
                <TableCell>04</TableCell>
                <TableCell>{count4} VNĐ</TableCell>
                <TableCell>10</TableCell>
                <TableCell>{count10} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>5</TableCell>
                <TableCell>05</TableCell>
                <TableCell>{count5} VNĐ</TableCell>
                <TableCell>11</TableCell>
                <TableCell>{count11} VNĐ</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>6</TableCell>
                <TableCell>06</TableCell>
                <TableCell>{count6} VNĐ</TableCell>
                <TableCell>12</TableCell>
                <TableCell>{count12} VNĐ</TableCell>
              </TableRow>
              
          </Table>
        </TableContainer>
      </Grid>

      <Grid item xs={8}>
        <Chart
        chartType="ColumnChart"
        width="100%"
        height="510px"
        data={[
            ["", "Tổng phí đăng tin bất động sản theo tháng", { role: "style" }],
            ["January", count1, "#aeca4b"], 
            ["February", count2, "#ffbe68"], 
            ["March", count3, "#ffa19b"], 
            ["April", count4, "#ff6358"],
            ["May", count5, "#aa46be"],
            ["June", count6, "#ddd"],
            ["July", count7, "#2d73f5"],
            ["August", count8, "#28b4c8"],
            ["September", count9,"#78d237"],
            ["October", count10, "#ffd246"],
            ["November", count11,"#2d73f5"],
            ["December", count12, "#c43b31"]
          ]}
        />
      </Grid>

      <Grid item xs={12}>
      <Typography gutterBottom className={classes.title}><BsFillPieChartFill/> Tổng số bất động sản</Typography>
    </Grid>
    <Grid item xs={6} className={classes.pie}>
          <Chart
          chartType="PieChart"
          data={[
          ["Type", "Count"],
          ["GÓI TIN MIỄN PHÍ", countMP.length],
          ["GÓI TIN VIP", countVIP.length],
          ["GÓI TIN ĐẶC BIỆT", countDB.length]
          ]}
          options={pieOptions}
          graph_id="PieChart"
          width={"100%"}
          height={"315px"}
          legend_toggle
          />
    </Grid>
    <Grid item xs={5}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Loại gói tin</TableCell>
              <TableCell>Tổng số loại gói tin</TableCell>
              <TableCell>Phần trăm</TableCell>
            </TableRow>
          </TableHead>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>GÓI TIN ĐẶC BIỆT</TableCell>
              <TableCell>{countDB.length}</TableCell>
              <TableCell>{((parseFloat(countDB.length)*100)/(parseFloat(countMP.length)+parseFloat(countVIP.length)+parseFloat(countDB.length))).toFixed(1)} %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>GÓI TIN VIP</TableCell>
              <TableCell>{countVIP.length}</TableCell>
              <TableCell>{((parseFloat(countVIP.length)*100)/(parseFloat(countMP.length)+parseFloat(countVIP.length)+parseFloat(countDB.length))).toFixed(1)} %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>GÓI TIN MIỄN PHÍ</TableCell>
              <TableCell>{countMP.length}</TableCell>
              <TableCell>{((parseFloat(countMP.length)*100)/(parseFloat(countMP.length)+parseFloat(countVIP.length)+parseFloat(countDB.length))).toFixed(1)} %</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>TỔNG</TableCell>
              <TableCell>{parseInt(countMP.length)+parseInt(countVIP.length)+parseInt(countDB.length)}</TableCell>
              <TableCell>100 %</TableCell>
            </TableRow>
          
        </Table>
      </TableContainer>
    </Grid>
    </Grid>
    </div>
    )
}
export default RealEstateChart;