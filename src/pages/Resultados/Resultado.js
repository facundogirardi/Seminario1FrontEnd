import * as React from 'react';
import Page from 'material-ui-shell/lib/containers/Page/Page'
import Scrollbar from 'material-ui-shell/lib/components/Scrollbar/Scrollbar'
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Footer from '../Footer/Footer';
import "./Resultado.css";

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
        style={{ height: '93.4%', width: '100%', display: 'flex', flex: 1 }}
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
            name="Pepsi Facturacion"
            valueField="hydro"
            argumentField="FacturacionPromedioGeneral"
          />
          <BarSeries
            name="Ferrari Facturacion"
            valueField="oil"
            argumentField="FacturacionPromedioGeneral"
          />
          <BarSeries
            name="Ford Facturacion"
            valueField="gas"
            argumentField="FacturacionPromedioGeneral"
          />
          <BarSeries
            name="Coca Cola Facturacion"
            valueField="coal"
            argumentField="FacturacionPromedioGeneral"
          />
          <BarSeries
            name="Nissan Facturacion"
            valueField="nuclear"
            argumentField="FacturacionPromedioGeneral"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title  fontFamily= "Bauer Bodoni" text="Dashboard sobre la facturacion promedio general dentro del rubro." />
          <Stack
            stacks={[
              { series: ['Pepsi', 'Ferrari', 'Ford', 'Coca-Cola', 'Nissan'] },
            ]}
          />
        </Chart>
      </Paper>
      <Paper>
        <Chart
          data={chartData}
        >
          <ArgumentAxis />
          <ValueAxis
            max={10000}
          />
          <BarSeries
            name="Pepsi Pedidos"
            valueField="hydro"
            argumentField="CarteraDePedidosPromedioGeneral"
          />
          <BarSeries
            name="Ferrari Pedidos"
            valueField="oil"
            argumentField="CarteraDePedidosPromedioGeneral"
          />
          <BarSeries
            name="Ford Pedidos"
            valueField="gas"
            argumentField="CarteraDePedidosPromedioGeneral"
          />
          <BarSeries
            name="Coca Cola Pedidos"
            valueField="coal"
            argumentField="CarteraDePedidosPromedioGeneral"
          />
          <BarSeries
            name="Nissan Pedidos"
            valueField="nuclear"
            argumentField="CarteraDePedidosPromedioGeneral"
          />
          <Animation />
          <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
          <Title  fontFamily= "Bauer Bodoni" text="Dashboard sobre la cartera de pedidos promedio general dentro del rubro." />
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
                fontFamily= "Bauer Bodoni"
                variant="contained"
                color="primary"
                className={ArrowBackIcon}
                >
                Realizar nuevamente
              </Button>
            </IconButton>
          </Link>
    </Scrollbar>
    <Footer/>
    </Page>
    );
  }
}