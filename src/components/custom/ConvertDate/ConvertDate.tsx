import React from 'react'
import moment from 'moment'

interface Props {
  date: any
}

export default function ConvertDate(props: Props) {
  const timestamp = new Date(props.date.seconds * 1000)

  return (
    <time>
      {moment(timestamp).format('MMM D YYYY, h:mm a')}
    </time>
  )
}
