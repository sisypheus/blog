import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <div className="max-h-full">
      <Header props={"visible"}></Header>
      <div className="fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4">
        <div className="flex items-center justify-center">
          <p>Page not found.</p>
          <p className="text-4xl text-blue-400">404</p>
        </div>
      </div>
    <footer className="fixed bottom-0 flex items-center justify-center p-4 bg-gray-700 text-white w-full">
      Theo Poette © {new Date().getFullYear()}, Made with ❤️ in Lille
    </footer>
    </div>
  </>
)

export default NotFoundPage