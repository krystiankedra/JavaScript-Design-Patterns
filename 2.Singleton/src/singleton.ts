class Singleton {

  private constructor() {}

  private static instance: Singleton | null = null

  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

export default Singleton
