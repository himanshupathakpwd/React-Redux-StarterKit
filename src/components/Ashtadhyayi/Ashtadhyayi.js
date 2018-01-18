import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { forEach } from 'lodash'

import {
  PRATYAHAR_SUTRANI,
  ASHTADHYAYI_SOOTRANI
} from '../../constants'

class Ashtadhyayi extends Component {
  render() {
    const props = this.props
    const { adhyay, pada, sootra } = props.match.params
    let output = <span />
    if (adhyay) {
      if (pada) {
        if (sootra) {
          output = <h3>Sootra: {ASHTADHYAYI_SOOTRANI[adhyay]['pada'][pada]['sootrani'][sootra - 1]}</h3>
        }
        else {
          const sootras = []
          forEach(ASHTADHYAYI_SOOTRANI[adhyay]['pada'][pada]['sootrani'], (value) => sootras.push(value))
          const sootraLinks = sootras.map((sootraData, index) => <li key={index}>
            <Link to={`${props.match.url}/${index + 1}`}>{sootraData}</Link>
          </li>
          )
          output = <ul>{sootraLinks}</ul>
        }
      }
      else {
        const padas = []
        forEach(ASHTADHYAYI_SOOTRANI[adhyay]['pada'], (value) => padas.push(value))
        const padaLinks = padas.map((padaData, index) => <li key={index}>
          <Link to={`${props.match.url}/${index + 1}`}>{padaData.name}</Link>
        </li>
        )
        output = <ul>{padaLinks}</ul>
      }
    }
    else {
      const adhyays = []
      forEach(ASHTADHYAYI_SOOTRANI, (value) => adhyays.push(value))
      const adhyayLinks = adhyays.map((adhyayData, index) => <li key={index}>
        <Link to={`${props.match.url}${index + 1}`}>{adhyayData.name}</Link>
      </li>
      )
      output = <ul>{adhyayLinks}</ul>
    }
    return (
      <div>
        <h2>Ashta</h2>
        <button onClick={() => console.log('back')}>Back</button>
        {output}
      </div>
    )
  }
}

Ashtadhyayi.propTypes = {
  match: PropTypes.object.isRequired
}

export default Ashtadhyayi
