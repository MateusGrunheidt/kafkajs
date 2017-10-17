class KafkaJSError extends Error {
  constructor(e, { retriable = true } = {}) {
    super(e.message || e)
    this.name = this.constructor.name
    this.retriable = retriable
  }
}

class KafkaJSPartialMessageError extends KafkaJSError {
  constructor(e) {
    super(e.message || e, { retriable: false })
  }
}

module.exports = {
  KafkaJSError,
  KafkaJSPartialMessageError,
}