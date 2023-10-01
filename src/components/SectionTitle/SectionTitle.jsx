// import PropTypes from 'prop-types';

// import { StyledSection, Title } from './Section.styled';

function Section({ title, children }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

export default Section;

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.object.isRequired,
// };



