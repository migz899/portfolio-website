function Hero({ title, subtitle }) {
  return (
    <section style={{
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  )
}

export default Hero