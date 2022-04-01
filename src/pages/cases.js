import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { NexvelCase } from "nexvel-demo-components"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Cases = ({ data }) => {
  const [mode, setMode] = useState("desktop")

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 768) {
      setMode("mobile")
    } else {
      setMode("desktop")
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  useEffect(() => {
    handleResize()
  }, [])

  const { title, caseWidget } = data.wpPage

  return (
    <Layout>
      <Seo title={title} />
      <NexvelCase mode={mode} data={caseWidget} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query wpPage {
    wpPage(databaseId: { eq: 26 }) {
      id
      title
      content
      caseWidget {
        header
        subHeader
        subHeaderIcon {
          altText
          sourceUrl
          localFile {
            childImageSharp {
              gatsbyImageData(width: 65, placeholder: BLURRED, formats: AUTO)
            }
          }
        }
        cases {
          caseTitle
          caseSubtitle
          caseContent
          caseIcon {
            altText
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(width: 65, placeholder: BLURRED, formats: AUTO)
              }
            }
          }
          caseImage {
            altText
            sourceUrl
            localFile {
              childImageSharp {
                gatsbyImageData(width: 400, placeholder: BLURRED, formats: AUTO)
              }
            }
          }
          caseLearnMore {
            url
            title
            target
          }
          caseFreeEvaluation {
            url
            title
            target
          }
        }
      }
    }
  }
`

export default Cases
