import React, { useState } from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    _id: '5fc25408edd5611e28402703',
    name: 'Test2',
    options: 'This is test1 career description',
    popularity: 'Medium',
    __v: 0
  },
  {
    _id: '5fd4740120fe8e50bc97f53b',
    name: 'Test1',
    options: 'This is test1 career description',
    popularity: 'High',
    __v: 0
  },
  {
    _id: '5fddc244b656652318a7f2fa',
    name: 'Test1',
    options: 'This is test1 career description',
    popularity: 'High',
    __v: 0
  },
  {
    _id: '5ffade153bf55e28dca115b1',
    name: 'Test1',
    options: 'This is test1 career description',
    popularity: 'High',
    __v: 0
  },
  {
    _id: '5ffaea246b6a530017bb5a07',
    name: 'Test1',
    options: 'This is test1 career description',
    popularity: 'High',
    __v: 0
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardHeader title="Career Sectors" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Options</TableCell>
                <TableCell>Popularity</TableCell>
                <TableCell colSpan={3} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((sector) => (
                <TableRow hover key={sector._id}>
                  <TableCell>{sector.name}</TableCell>
                  <TableCell>{sector.options}</TableCell>
                  <TableCell>{sector.popularity}</TableCell>
                  <TableCell>
                    <Button color="primary" size="small" variant="text">Add</Button>
                  </TableCell>
                  <TableCell>
                    <Button color="primary" size="small" variant="text">Edit</Button>
                  </TableCell>
                  <TableCell>
                    <Button color="primary" size="small" variant="text">Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
