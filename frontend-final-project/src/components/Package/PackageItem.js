import React from 'react'
import { Radio, Card } from 'semantic-ui-react'

const packageItem = (props) => {
  return (
    <div className="package-item">
      <Card>
        <Card.Content>
          <h4>Photography Package</h4>
          Price: ${props.packageItem.price} <br />
          {props.packageItem.hours} hour session <br />
          Photos: {props.packageItem.photos_to_deliver} <br />
          <Radio label='Select Package' value={props.packageItem.id} onChange={ (event) => props.handlePackageSelection(props.packageItem) }/>
        </Card.Content>
      </Card>
    </div>
  )
}

export default packageItem
