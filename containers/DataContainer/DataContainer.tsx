import React from 'react'

import DataViews from '../../components/DataViews'

const DataContainer = () => {
    return (
        <div className="grid grid-flow-row gap-2 md:grid-cols-2 md:gap-4">
            <DataViews title="Unplash Downloads" views="21,776"/>
            <DataViews title="Unplash Downloads" views="21,776"/>
            <DataViews title="Unplash Downloads" views="21,776"/>
            <DataViews title="Unplash Downloads" views="21,776"/>
        </div>
    )
}

export default DataContainer
