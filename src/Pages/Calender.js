import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const CalendarPage = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting', date: '2025-04-20' },
    { title: 'Project Deadline', date: '2025-04-22' },
  ]);

  const handleDateClick = (arg) => {
    const title = prompt('Enter event title:');
    if (title) {
      const newEvent = { title, date: arg.dateStr };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <>
      <h1 className="text-light mt-3 mb-2">CALENDAR</h1>
      <p style={{ color: '#1c9877' }}>Full Calendar Interactive Page</p>
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', minHeight: '100vh' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          {/* Sidebar */}
          <div style={{
            flex: '1 1 300px',
            height: '85vh',
            backgroundColor: '#1a2438',
            borderRadius: '8px',
            padding: '20px',
            color: 'white',
          }}>
            <h3 className="mb-4">Upcoming Events</h3>
            <ul style={{ padding: 0 }}>
              {events.map((event, index) => (
                <li key={index}
                  style={{
                    listStyle: 'none',
                    backgroundColor: '#1c9877',
                    marginBottom: '15px',
                    padding: '10px 15px',
                    borderRadius: '6px'
                  }}>
                  <strong>{event.title}</strong>
                  <div>{event.date}</div>
                </li>
              ))}
            </ul>
          </div>

          {/* Calendar */}
          <div style={{ flex: '3 1 600px' }}>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              events={events}
              dateClick={handleDateClick}
              height="85vh"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay',
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarPage;
