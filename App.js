import React, { Component } from 'react'
import { DataTable } from 'react-native-paper'

export default class Tables extends Component {
  render() {
    return (
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Player</DataTable.Title>
          <DataTable.Title numeric>Runs</DataTable.Title>
          <DataTable.Title numeric>Balls</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>ABC</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
          <DataTable.Cell numeric>26</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>DEF</DataTable.Cell>
          <DataTable.Cell numeric>45</DataTable.Cell>
          <DataTable.Cell numeric>72</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>GHI</DataTable.Cell>
          <DataTable.Cell numeric>103</DataTable.Cell>
          <DataTable.Cell numeric>195</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>JKL</DataTable.Cell>
          <DataTable.Cell numeric>77</DataTable.Cell>
          <DataTable.Cell numeric>128</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>MNO</DataTable.Cell>
          <DataTable.Cell numeric>89</DataTable.Cell>
          <DataTable.Cell numeric>156</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>PQR</DataTable.Cell>
          <DataTable.Cell numeric>61</DataTable.Cell>
          <DataTable.Cell numeric>107</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>STU</DataTable.Cell>
          <DataTable.Cell numeric>43</DataTable.Cell>
          <DataTable.Cell numeric>95</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>VWX</DataTable.Cell>
          <DataTable.Cell numeric>48</DataTable.Cell>
          <DataTable.Cell numeric>50</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>YZA</DataTable.Cell>
          <DataTable.Cell numeric>32</DataTable.Cell>
          <DataTable.Cell numeric>20</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>BCD</DataTable.Cell>
          <DataTable.Cell numeric>25</DataTable.Cell>
          <DataTable.Cell numeric>40</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>EFG</DataTable.Cell>
          <DataTable.Cell numeric>15*</DataTable.Cell>
          <DataTable.Cell numeric>29</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    );
  }
}
