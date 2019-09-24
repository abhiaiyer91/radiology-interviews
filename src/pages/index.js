import React from "react"
import { graphql } from "gatsby"

import "semantic-ui-css/semantic.min.css"

import { Icon, Label, Menu, Table } from "semantic-ui-react"

const TableExamplePagination = ({ rows }) => (
  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Location</Table.HeaderCell>
        <Table.HeaderCell>Sent Date</Table.HeaderCell>
        <Table.HeaderCell>Dates</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {rows.map(({ name, location, interviewSentDate, interviewSlots }) => {
        return (
          <Table.Row>
            <Table.Cell>{name}</Table.Cell>

            <Table.Cell width={4}>{location}</Table.Cell>

            <Table.Cell>{interviewSentDate}</Table.Cell>

            <Table.Cell>{interviewSlots}</Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  </Table>
)

const SecondPage = ({ data }) => {
  console.log(data)
  const rows = data.interviews.interviewsForApplication
  return (
    <section style={{ maxWidth: 1024, margin: "64px auto" }}>
      <TableExamplePagination rows={rows} />
    </section>
  )
}

export const interviews = graphql`
  {
    interviews {
      interviewsForApplication {
        location
        name
        interviewSentDate
        interviewSlots
      }
    }
  }
`

export default SecondPage
