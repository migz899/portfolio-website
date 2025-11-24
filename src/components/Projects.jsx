function TestProjects() {
  const projects = [
    { name: 'Mystery Box Game', tech: 'Phaser 3' },
    { name: 'Telegram Bot Game', tech: 'HTML5 + JS' },
    { name: 'Leaderbored.gg Mini Game', tech: 'Phaser 3 + Firebase' }
  ]

  return (
    <section style={{
      padding: '20px',
      backgroundColor: '#f9f9f9',
      color: 'black'
    }}>
      <h2>My Projects</h2>
      <ul>
        {projects.map((p, index) => (
          <li key={index}>{p.name} — <i>{p.tech}</i></li>
        ))}
      </ul>
    </section>
  )
}

export default TestProjects