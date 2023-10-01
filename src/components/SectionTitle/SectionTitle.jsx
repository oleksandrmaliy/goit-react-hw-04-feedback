import PropTypes from 'prop-types';

import {TitleH2} from './SectionTitle.styled';

function Section({ title, children }) {
  return (
    <section>
      {title && <TitleH2>{title}</TitleH2>}
      {children}
    </section>
  );
}

export default Section;

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};



