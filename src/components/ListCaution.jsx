import React, { useState, useEffect } from 'react'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import findCautions from '../service/findCautions'

const columns = [
  { id: 'graduation', label: 'Posto/graduação', minWidth: 70 },
  { id: 'name', label: 'Nome', minWidth: 150 },
  {
    id: 'session',
    label: 'Sessão',
    minWidth: 80,
    align: 'left'
  },
  {
    id: 'device',
    label: 'Dispositivo',
    minWidth: 280,
    align: 'left'
  },
  {
    id: 'date',
    label: 'data de cautela',
    minWidth: 100,
    align: 'left'
  },
  {
    id: 'bewareDate',
    label: 'data de descautela',
    minWidth: 70,
    align: 'left'
  },
  {
    id: 'beware',
    label: 'Descautelar',
    minWidth: 70,
    align: 'left'
  },
  {
    id: 'Sender',
    label: 'Remetente',
    minWidth: 70,
    align: 'left'
  },
  {
    id: 'Delete',
    label: 'Apagar',
    minWidth: 70,
    align: 'left'
  }
]

function createData(graduation, name, session, device, date) {
  console.log(date, 'date')
  return {
    graduation,
    name,
    session,
    device,
    date
  }
}

export default function StickyHeadTable() {
  const [allCautions, setAllCautions] = useState([])

  useEffect(() => {
    const loadCautions = async () => {
      const list = await findCautions()
      if (!list) return
      setAllCautions(list)
    }
    loadCautions()
  }, [])
  console.log(allCautions)

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const allCustomersData =
    allCautions && allCautions.data ? allCautions.data.cautions : []

  const rows =
    allCustomersData &&
    allCustomersData.map(caution => {
      const createdAt = caution.createdAt.split('T')
      const createdAtSplited = createdAt[0].split('-')
      const createdAtNormalized = createdAtSplited.reverse().join('/')
      return createData(
        caution.graduation,
        caution.name,
        caution.session,
        caution.device,
        createdAtNormalized
      )
    })

  if (allCustomersData.length === 0) return 'Nenhum registro encontrado.'

  return (
    <Paper style={{ width: '100%' }}>
      <TableContainer style={{ maxHeight: '700px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead style={{ backgroundColor: 'black' }}>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  className="table-header"
                  key={column.label}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.cpfOrCnpj}
                  >
                    {columns.map(column => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}
