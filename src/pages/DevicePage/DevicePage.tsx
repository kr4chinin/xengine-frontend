import styles from './DevicePage.module.scss';
import { useParams } from 'react-router-dom';

const DevicePage = () => {

    const { id } = useParams<{ id: string }>();

    return (
        <div>
            {`Device ${id}`}
        </div>
    )
}

export default DevicePage