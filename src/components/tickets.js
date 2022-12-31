import { Button, Container, Row } from 'react-bootstrap';
import upcomingDates from '../info/upcomingDates';

function Tickets(props) {
  const current = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];

  const nextShowDate = upcomingDates.find(date => new Date(date.year, date.month, date.day, 21) > current);
  const nextShow = nextShowDate ? `${months[nextShowDate.month]} ${days[nextShowDate.day - 1]}` : 'No upcoming shows';

  return (
    <Container className={props.containerSpace} fluid>
        <Row className={props.rowSpace}>
            <h1>Next Show is:</h1>
        </Row>
        <Row className={props.rowSpace}>
            <Button variant="outline-light" size="lg" href="https://www.eventbrite.com/e/sauteed-standup-tickets-255522774497" target="_blank"><h1>Sunday <span>{nextShow}</span></h1></Button>
        </Row>
    </Container>

  );
}

export default Tickets;
