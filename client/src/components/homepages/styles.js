import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container: {
       fontFamily:"Roboto",
       color:"#172b4d",
       backgroundColor:"white",
       padding: 0,
       
    },
    containerSearch:{
       backgroundColor:"rgb(255 255 255)",
       padding: 0,
       color:"#172b4d"
    },
    menuButton: {
      marginRight: theme.spacing(5),
    },
    title: {
      flexGrow: 1,
      fontSize:18
    },
    appBar:{
        backgroundColor:"#1b3494",
        paddingLeft:80,
        paddingRight:80,
        fontSize:19,
        paddingBottom:10,
        paddingTop:5,
    },
    appBarMenu:{
        marginRight:30,
        fontSize:17,
    },
    icon_home:{
        marginRight:15,
    },
    header:{
        backgroundColor:"#273879",
    },
    paper0:{
        display: 'flex',
        fontSize:18,
        color:"#cf9f71",
        backgroundColor:"#273879",
        paddingRight:40,
        height:200,
        paddingTop:20,
    },
    paper1:{
        marginTop:30,
        display: 'flex',
        fontSize:17,
        color:"#cf9f71",
        backgroundColor:"#273879",
        float:"right",
    },
    paper2:{
        marginTop:20,
        marginLeft:30,
        display: 'flex',
        float:"right",
        fontSize:16,
        color:"#dee2e6",
        backgroundColor:"#273879"
    },
    logo_home:{
        paddingTop:40,
        paddingLeft:110
    },
    logosmall:{
        paddingTop:1, height:18, width:18,marginLeft:5, paddingRight:40
    },
    sliderimg: {
        width: "100%",
        height: 500,
        objectFit:"cover",
    },

    textSearch: {
        marginTop:100
    },
    radioSearch: {
        marginTop:15, marginRight:50, marginLeft:30
    },
    appSearch:{height:190, padding:10, marginTop:650, backgroundColor:"#f5f7fc"},
    paper3: {
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
    },
    media: {
        height: 200,
    },
   
    cardContent:{
        backgroundColor:'white',paddingTop:60,paddingLeft:150,paddingRight:150, paddingBottom:100
    },

    search:{
        paddingTop:80,paddingBottom:30,backgroundColor:'white'
    },
    multiLineEllipsis: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical"
    },
    bodyCard:{
        fontSize:18, color:"#14181b", fontWeight:500
    },
    bodyCard1:{
        fontSize:20, color:"#364047", fontWeight:500,
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical"
    },
    bodyCard2:{
        fontSize:22, color:"#b69b15", fontWeight:500,
    },
    iconCard:{
        marginRight:15
    },
    titleCardVip1:{
        color:'purple'
    },
    titleCardVip2:{
        color:'#bf6921'
    },
    titleCardVip3:{
        color:'#484645'
    },
    btnAll:{
        marginTop:50
    },
    titleChiMuc:{
        fontSize:25, color:'#ac7b40', textTransform:'uppercase'
    },
    cardListImg:{ 
        marginRight:8, 
        height:260,
    },
    cardListImg1:{
        height:585
    },
    cardListImg2:{
        height:260
    },
    paper:{
        padding: theme.spacing(1),textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    containFooter:{
        paddingTop:80, paddingBottom:120,fontFamily:"Roboto",
        color:"#172b4d",
        backgroundColor:"#f6f6f5",
    },
    textGioiThieu:{
        lineHeight:2, marginBottom:8, textAlign:'justify', fontFamily:'Calibri (Body)',
        paddingRight:90
    },
    iconFooter:{
        height:20, width:20,marginRight:10, color:'#c3a357',textAlign:'justify',fontFamily:'Calibri (Body)'
    },
    checkSearch:{
        paddingLeft:50,paddingTop:6, paddingBottom:6,paddingRight:30,textAlign:'justify',fontFamily:'Calibri (Body)'
    },
    imgHomeitem:{height:700, width:'100%', objectFit:"cover"},
    titleTen:{
        fontSize:28, color:'#2b2c2d', marginTop:15
    },
    titleDiachi:{
        fontSize:19, color:'#3d4654'
    },
    titleDiachi1:{
        fontSize:19, color:'#2b2b2b', fontWeight:500
    },
    titleDiachi2:{
        fontSize:19, color:'#949292', lineHeight:2,marginBottom:10
    },
    space:{
        marginLeft:20,marginRight:20, color:'#716f6f'
    },
    colorIcon:{
        color:"#ecc058", fontSize:25
    },
    colorIcon1:{
        color:"#173f98", fontSize:25
    },
    iconCheck:{
        color:'green', fontSize:30
    },
    loginIcon:{
        height:55, width:55, marginRight:20
    },
    styleLink:{
        color:'white',textDecoration:'none'
    },rowLogin:{
        display: 'flex',
        float:"left",
    },
    nameLogin:{
        marginTop:13,
        cursor:'pointer'
    },
    iconAccount:{
        marginRight:8,
        color:'#8f8f8f'
    },
    LinkMenu:{
        color:'#8f8f8f',
        textDecoration:'none'
    },
    btnDangtin:{
        color:'white',
        textDecoration:'none', marginTop:4, marginLeft:30
    },
    item_map:{
        height:"160px", width:'305px'
    },
    title_item_map:{
        fontSize:15,
        textTransform:'uppercase',
        color:"#1d70c8",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        "-webkit-line-clamp": 2,
        "-webkit-box-orient": "vertical"
    },
    text_item_content:{
        fontSize:15, fontWeight:'bold'
    },
    card_map:{fontSize:15},
    list_map:{
        //width:400,
        backgroundColor:'white', height:900,
        // max-width: 350px;
        // width: 350px;
        // max-height: 1000px,
        overflow: 'scroll'
    },
    card_item:{
        backgroundColor:'#fbfcfc'
    },
    cot1:{
        paddingRight:40
    },
    linkHome:{
        textDecoration:'none',
        color:'#666666'
    },
    containItem:{
        paddingTop:50,
        backgroundColor:'white',
        marginTop:1
    },marginItem:{
        marginBottom:100
    },
    contentHeader:{marginTop:0},
    shareIcon:{
        marginRight:10
    
    },
    IconChat:{
        
    },
    contentmyre:{
        marginTop: 1,
        paddingTop:20,
    }
    
}));
