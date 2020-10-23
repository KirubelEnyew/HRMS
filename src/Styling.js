import {makeStyles} from '@material-ui/core';

const drawerWidth = 240;

const useStyle = makeStyles((theme)=>({
    root: {
        display: 'flex',
    },
    grid: {
      display:'flex',
      justifyContent:'center'
          },
    submitBtn:{
      width: "50%",
      backgroundColor: 'rgb(128, 188, 49)',
      color: "white",
      '&:hover':{
        backgroundColor: 'rgb(113, 174,33)',
        color : "black"
                },
              },
    avatar :{
      width: theme.spacing(7),
      height: theme.spacing(7)
            },      
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          display: 'none',
        },
      },
      formControl:{
        margin : theme.spacing(3),
        minWidth : 120
      },
      toolbar: theme.mixins.toolbar,
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      links : {
        textDecoration : 'none'
      },
      appBar: {
        [theme.breakpoints.up('md')]: {
          width: `calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth,
        },
        background : 'rgb(100,150,80)'
      },
      signInAppBar: {
        background : 'rgb(100,150,80)'
      },
      nestedList: {
        paddingLeft: theme.spacing(4),
        color : 'white'
      },
      iconColor: {
        color : 'white'
      },
    menuToggle : {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]:{
            display: 'none',
            background: 'black'
        },
        color: 'white'
    },
    more : {
      display:'flex',
      justifyContent: 'right'
    },
    drawer: {
        [theme.breakpoints.up("md")]:{
            flexShrink:0,
            width:drawerWidth
        }
    },
    drawerPaper:{
        width: drawerWidth,
        background: 'rgb(100,150,80)'
    },
    itemHeder:{
        color: 'white',
        fontWeight: 'bold'
    },
    itemColor:{
        color:'white'
    },
    tableContainer:{
        paddingTop:theme.spacing(4)
    }
}));

export default useStyle;