import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import * as React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavStyle from '../style/Nav.styles';

export default function Nav() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

    useEffect(() => {
       if(value === 0) navigate('/')
       else if(value === 1) navigate('/movies')
       else if(value === 2) navigate('/tvSeries')
       else if(value === 3) navigate('/search')
      
    },[value,navigate]);

  return (
    <NavStyle>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
        label="Trending" 
        icon={<WhatshotIcon />} 
        />
        <BottomNavigationAction 
        label="Movies" 
        icon={<MovieIcon />} 
        />
        <BottomNavigationAction 
        label="Tv Series" 
        icon={<TvIcon />} 
        />
        <BottomNavigationAction 
        label="Search" 
        icon={<SearchIcon />}     
        />
      </BottomNavigation>
    </NavStyle>
  );
}