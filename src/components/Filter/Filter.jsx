import { useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/filterSlice';

import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(updateFilter(evt.target.value));
  };
  return (
    <div>
      <Typography
        variant="h6"
        noWrap
        component="a"
        sx={{
          display: { xs: 'none', md: 'flex' },
          mt: 2,
          mb: 2,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.2rem',
          color: 'black',
          textDecoration: 'none',
        }}
      >
        Find contacts by name
      </Typography>
      <TextField
        id="standard-basic"
        label="Input name of contact"
        variant="standard"
        size="small"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
