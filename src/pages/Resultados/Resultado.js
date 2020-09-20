import * as React from 'react';
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import {
  Chart,
  Title,
  Legend,
  ArgumentAxis,
  BarSeries,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { energyConsumption as data } from '../Resultados/DatosTabla';
import { Stack, Animation } from '@devexpress/dx-react-chart';

const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const legendLabelStyles = () => ({
  label: {
    whiteSpace: 'nowrap',
  },
});
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Page pageTitle={'Usted esta en la ventana de los resultados.'}>
      <Scrollbar
        style={{ height: '100%', width: '100%', display: 'flex', flex: 1 }}
      >
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis
            max={10000}
          />

          <BarSeries
            name="Pepsi"
            valueField="hydro"
            argumentField="mes"
          />
          <BarSeries
            name="Ferrari"
            valueField="oil"
            argumentField="mes"
          />
          <BarSeries
            name="Ford"
            valueField="gas"
            argumentField="mes"
          />
          <BarSeries
            name="Coca Cola"
            valueField="coal"
            argumentField="mes"
          />
          <BarSeries
            name="Nissan"
            valueField="nuclear"
            argumentField="mes"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title text="Dashboard sobre como esta tu Pyme dentro del Rubro." />
          <Stack
            stacks={[
              { series: ['Pepsi', 'Ferrari', 'Ford', 'Coca-Cola', 'Nissan'] },
            ]}
          />
        </Chart>
      </Paper>

      <Link to="/Encuesta">
            <IconButton edge="end" className={ArrowBackIcon} color="inherit"  aria-label="menu">
              <Button 
                variant="contained"
                color="primary"
                className={Button}
                >
                Inicio
              </Button>
            </IconButton>
          </Link>
    </Scrollbar>
    </Page>
    );
  }
}