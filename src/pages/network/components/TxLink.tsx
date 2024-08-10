import { Link } from 'react-router-dom'

import { Routes } from '@app/router'
import type { NetworkTxQueryParams } from '@app/router/routes'
import { clsxTwMerge, formatEllipsis } from '@app/utils'
import CopyText from './CopyText'

type Props = {
  value: string
  className?: string
  copy?: boolean
  ellipsis?: boolean
  isHistoricalTx?: boolean
}

export default function TxLink({
  value,
  className,
  copy,
  ellipsis,
  isHistoricalTx = false
}: Props) {
  const queryParams: NetworkTxQueryParams = {
    type: isHistoricalTx ? 'historical' : 'latest'
  }

  return (
    <div className="flex items-center gap-10">
      <Link
        className={clsxTwMerge('break-all font-space text-sm', className)}
        to={Routes.NETWORK.TX(value, queryParams)}
        role="button"
      >
        {ellipsis ? formatEllipsis(value) : value}
      </Link>
      {copy && <CopyText text={value} />}
    </div>
  )
}
