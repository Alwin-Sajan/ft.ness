
const  Footer = () => {
    return(
        <footer className="lg:px-24 w-full">
        <div className="bg-neutral-200 lg:rounded-t-2xl dark:bg-neutral-800 text-center py-8 ">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} FT.NESS. All rights reserved.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Built with ❤️ by Alwin Sajan
          </p>
        </div>
      </footer>
    )
}

export default Footer;