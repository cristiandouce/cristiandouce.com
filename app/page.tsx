import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <h1>Cristian Douce</h1>
      <p>Welcome to my personal site.</p>
      <p>Yes... I&apos;m still working on a good presentation...</p>
      <p>Thanks for stopping by though!</p>
      <p>Meanwhile you can follow me and my work:</p>
      <ul>
        <li>
          <a
            href="http://github.com/cristiandouce"
            target="_blank"
            rel="noreferrer"
          >
            github
          </a>
        </li>
        <li>
          <a
            href="http://twitter.com/cristiandouce"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="http://ar.linkedin.com/in/cristiandouce"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </main>
  )
} 