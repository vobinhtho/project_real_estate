import { Button, Checkbox, Container, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from '@material-ui/core';
import React from 'react';
import useStyles from './styles'

const Search = () =>{
    const classes = useStyles();
    return(
        <Grid container spacing={3} className={classes.search}>

                <Grid item xs={2} >
                    
                    <FormGroup row>
                            <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Primary"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Primary"
                        />
                        </FormGroup>
                   
                </Grid>

                <Grid item xs={10}>
                    <Grid container spacing={1}>
                        <Grid item xs={4}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={3}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Loại nhà đất</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>
                        
                        <Grid item xs={2}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Giá tiền</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={2}>
                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Diện tích</InputLabel>
                            <Select labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Khu vực"
                            >
                            <MenuItem value="">
                                <em>Tất cả</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={1}>
                        <Button fullWidth variant="contained" style={{backgroundColor:"#1638ad", color:"white",height:55}}>Tìm kiếm</Button>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
    );
}
export default Search;