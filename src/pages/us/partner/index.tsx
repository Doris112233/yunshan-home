import React from 'react';
import { useIntl } from 'umi';
import Grid from '@mui/material/Grid';
import data from '../../../data/partner';
import './index.less';

const Partner: React.FC = (props) => {
  const intl = useIntl();

  const src = data[0].src;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={12} sm={10} md={8}>
        <img className="partner-total" src={src}></img>
      </Grid>
    </Grid>
  );
};

export default Partner;
