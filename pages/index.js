import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faBell, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../tailwind.config';
import SEO from '../components/seo';

const BarGraphHistogramTooltip = ({ active, payload, label }) => {
    const readableNames = {
        all: 'Processed',
        problematic: 'Problematic items',
        inProgress: 'In progress items',
    };
    if (active && payload && payload.length) {
        const values = payload.map((item) => (
            <p key={item.name} style={{ color: item.color }}>{`${readableNames[item.name]}: ${
                item.value
            }`}</p>
        ));
        return (
            <div className="bg-white text-left p-5">
                <p>{label}</p>
                {values}
            </div>
        );
    }

    return null;
};

BarGraphHistogramTooltip.defaultProps = {
    active: false,
};

BarGraphHistogramTooltip.propTypes = {
    active: PropTypes.bool,
    label: PropTypes.string.isRequired,
    payload: PropTypes.arrayOf(
        PropTypes.shape({
            fill: PropTypes.string.isRequired,
            dataKey: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired,
            formatter: PropTypes.func,
            unit: PropTypes.string,
            type: PropTypes.string,
            payload: PropTypes.objectOf(PropTypes.any).isRequired,
        }),
    ).isRequired,
};

export default function Home() {
    const tw = resolveConfig(tailwindConfig);

    return (
        <>
            <SEO title="Dashboard" />
            <div className="px-7 py-10">
                <h1 className="text-xl">Welcome</h1>
                <hr />
            </div>
        </>
    );
}
