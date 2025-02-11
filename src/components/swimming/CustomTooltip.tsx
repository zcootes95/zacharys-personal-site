export const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload
        return <div>{/* Customize if you want a visible tooltip */}</div>
    }
    return null
}
