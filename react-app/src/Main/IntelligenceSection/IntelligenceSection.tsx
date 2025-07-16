import { useNavigate } from 'react-router-dom';
import './IntelligenceSection.css';
import Button from '../../components/Buttons/Button';

export const IntelligenceSection = () => {
  const navigate = useNavigate();
  return (
    <div className="intelligence block-container">
      <div className="intelligence-content">
        <h3 className="intelligence-title">AutoNexus Intelligence</h3>
        <p className="intelligence-description">
          Наши автомобили оснащены интеллектуальными <br />
          системами контроля. Управляй параметрами, <br />
          отслеживай производительность и настрой <br />
          авто под себя голосом.
        </p>
        <Button onClick={() => navigate('*')}>Технологии</Button>
      </div>
      <div className="intelligence-image">
        <img src="src/assets/images/turbo.webp" className="image-rounded" alt="Мотор" />
        <p className="intelligence-caption text-secondary">
          AutoNexus Intelligence – эксклюзивная разработка. Функциональность зависит от
          комплектации.
        </p>
      </div>
    </div>
  );
};
