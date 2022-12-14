import Axios from "axios"
export const GET_ALL_LEADERS = "GET_ALL_LEADERS"
export const GET_FILTER_TAGS = "GET_FILTER_TAGS"
export const FILTER_LEADERS = "FILTER_LEADERS"
export const GET_ALL_PERSONS = "GET_ALL_PERSONS"
export const GET_FILTERED_PERSONS = "GET_FILTERED_PERSONS"
export const ADD_NAVBAR_FILTERS = "ADD_NAVBAR_FILTERS"
export const FILTER_NAVBAR_FILTERS = "FILTER_NAVBAR_FILTERS"

export const fetchHLSPersons = () => {
  return async dispatch => {
    const link =
      "https://akamai.alvarezandmarsal.com/jsonapi/node/profile?include=field_professional_title,field_image_background,field_image,field_expertise,field_city,field_region,field_industry&filter[field_industry.id]=c11b8f8f-9d3a-433a-949e-5518b9b24c25"
    await Axios.get(link)
      .then(data => {
        const dataIncluded = data?.data.included
        const profiles = getInformationOfLeaders(dataIncluded, data?.data.data)
        let obj = {}
        let expertises = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--expertise"
        )
        let locations = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--global_locations"
        )
        data.data.included?.filter(
          x => x.type === "taxonomy_term--global_locations"
        )
        let cities = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--cities"
        )
        let industries = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--industries"
        )
        obj = {
          profiles: profiles,
          cities: cities,
          expertises: expertises,
          location: locations,
          industries: industries,
          filters: [
            { values: expertises, name: "EXPERTISES" },
            { values: industries, name: "industries" },
            { values: locations, name: "locations" },
            { values: cities, name: "cities" },
          ],
        }
        dispatch({
          type: GET_ALL_PERSONS,
          payload: obj,
        })
      })
      .catch(err => console.log(err))
  }
}

export const fetchHLSLeaders = () => {
  return async dispatch => {
    const link = `https://akamai.alvarezandmarsal.com/jsonapi/taxonomy_term/industries/ca12f9a8-bfed-4fc1-9a04-5cc560a91fff?include=field_featured_expert.field_professional_title,
    field_featured_expert.field_image_background,
    field_featured_expert.field_image,
    field_featured_expert.field_expertise,
    field_featured_expert.field_city,
    field_featured_expert.field_region`
    // const link = `http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/${industryId}?include=field_featured_expert.field_professional_title,
    // field_featured_expert.field_image_background,
    // field_featured_expert.field_image,
    // field_featured_expert.field_expertise,
    // field_featured_expert.field_city,
    // field_featured_expert.field_region`;

    await Axios.get(link)
      .then(data => {
        let obj = {}
        // console.log(data);

        const dataIncluded = data?.data.included

        let profiles = data.data.included?.filter(
          x => x.type === "node--profile"
        )
        let expertises = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--expertise"
        )
        let global_locations = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--global_locations"
        )
        // data.data.included?.filter(
        //   x => x.type === "taxonomy_term--global_locations"
        // )
        let cities = getIdAndNamebyTaxonomyType(
          dataIncluded,
          "taxonomy_term--cities"
        )

        // let cities = dataIncluded.filter(function (el) {
        //   return el.type === "taxonomy_term--cities";
        // });
        const leaders = getInformationOfLeaders(dataIncluded, profiles)
        obj = {
          leaders: leaders,
          cities: cities,
          expertises: expertises,
          location: global_locations,
        }

        // console.log(obj);
        dispatch({
          type: GET_ALL_LEADERS,
          payload: obj,
        })
        // return obj;
        // setContent(obj);
      })
      .catch(err => console.log(err))
  }
}

const linkHealtCare =
  "http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/ca12f9a8-bfed-4fc1-9a04-5cc560a91fff?include=field_featured_expert.field_region,field_featured_expert.field_division"

const linkECMAHEALTCARE =
  "http://192.168.0.113:8080/jsonapi/taxonomy_term/industries/c11b8f8f-9d3a-433a-949e-5518b9b24c25?include=field_featured_expert.field_region,field_featured_expert.field_division"

//get information: field_image_background , field_image, field_region
// require includedArray  , and an array of profiles
const getInformationOfLeaders = (dataIncluded, profiles) => {
  const linkOurPeople = "https://www.alvarezandmarsal.com/our-people/"
  const linkLocation = "https://www.alvarezandmarsal.com/global-locations/"
  const liveAM = "https://www.alvarezandmarsal.com/"
  // console.log(profiles);

  let parsedProfiles = []
  console.log(profiles)
  profiles?.map(profile => {
    let imageId = profile?.relationships?.field_image_background?.data?.id
    let imageId1 = profile?.relationships?.field_image?.data?.id

    let professionId =
      profile?.relationships?.field_professional_title?.data[0]?.id
    let locationId = profile?.relationships?.field_region?.data[0]?.id
    let firstName = profile.attributes?.field_first_name
    let lastName = profile.attributes?.field_last_name
    let country = dataIncluded?.find(x => x.id === locationId)
    let imageURL =
      dataIncluded?.find(x => x.id === imageId)?.attributes.uri.url ||
      dataIncluded?.find(x => x.id === imageId1)?.attributes.uri.url

    let person = {
      id: profile.id,
      firstName: firstName,
      lastName: lastName,
      name:
        profile.attributes?.field_first_name +
        " " +
        profile.attributes?.field_last_name,

      phone: profile.attributes?.field_telephone,
      smallDescription: profile.attributes?.field_intro_text,
      allDescription: profile.attributes.body?.value,
      email: {
        uri: profile.attributes.field_mail?.uri,
        title: profile.attributes.field_mail?.title,
      },
      twitter: {
        uri: profile.attributes.field_twitter?.uri,
        title: profile.attributes.field_twitter?.title,
      },
      linkedin: {
        uri: profile.attributes.field_linkedin?.uri,
        title: profile.attributes.field_linkedin?.title,
      },
      position: dataIncluded?.find(x => x.id === professionId)?.attributes
        ?.name,

      // profile?.relationships?.field_professional_title?.data?.id,

      country: {
        id: country?.id,
        name: country?.attributes?.name,
        type: country?.type,
      },
      image: liveAM + imageURL,
      // image:
      //   liveAM +
      //     dataIncluded?.find((x) => x.id === imageId)?.attributes.uri.url ||
      //   dataIncluded?.find((x) => x.id === imageId1)?.attributes.uri.url,
      // image1:
      //   liveAM +
      //   dataIncluded?.find((x) => x.id === imageId1)?.attributes.uri.url,
      // image1: imageId1,
      linkLocation:
        linkLocation +
        country?.attributes?.name.split(" ").join("-").toLowerCase(),
      linkOurPeople:
        linkOurPeople + firstName.toLowerCase() + "-" + lastName.toLowerCase(),
      city: profile?.relationships?.field_city?.data[0],
      // city: profile?.relationships?.field_city?.data[0],
      expertise: profile?.relationships?.field_expertise?.data[0],
      // .map((x) => x.image.attributes.uri.url),
    }
    parsedProfiles = [...parsedProfiles, person]
  })
  return parsedProfiles
}

const getIdAndNamebyTaxonomyType = (dataIncluded, type) => {
  const newArr = dataIncluded
    ?.filter(x => x.type === type)
    ?.map(city => {
      let newCity = {
        id: city.id,
        name: city.attributes.name,
        type: type,
      }
      return newCity
    })
  return newArr
}

export const filterHLSPersons = () => {
  return async (dispatch, getState) => {
    const filters = getState().leaders.navbarFilters
    //if no filters fetch all persons for EMEA HEALTCARE
    if (filters.length === 0) {
      await fetchHLSPersons()
    } else {
      let filterByIndustry = ""
      let filterByExpertise = ""
      let filterByCountry = ""
      let filterByCity = ""

      //prepare filters from filter navbar ,to pass in url
      filters?.forEach(filter => {
        if (filter?.type === "taxonomy_term--industries") {
          filterByIndustry = `&filter[field_industry.id]=${filter.id}`
        } else if (filter?.type === "taxonomy_term--global_locations") {
          filterByCountry = `&filter[field_region.id]=${filter.id}`
        } else if (filter?.type === "taxonomy_term--cities") {
          filterByCity = `&filter[field_city.id]=${filter.id}`
        } else if (filter?.type === "taxonomy_term--expertise") {
          filterByExpertise = `&filter[field_expertise.id]=${filter.id}`
        }
      })

      const emeaIndustryId = "c11b8f8f-9d3a-433a-949e-5518b9b24c25"

      const link = `https://akamai.alvarezandmarsal.com/jsonapi/node/profile?include=field_professional_title,field_image_background,field_image,field_expertise,field_city,field_region,field_industry${filterByIndustry}${filterByExpertise}${filterByCountry}${filterByCity}`

      await Axios.get(link)
        .then(data => {
          // console.log(data)
          const dataIncluded = data?.data?.included
          const profiles = getInformationOfLeaders(
            dataIncluded,
            data?.data?.data
          )
          let obj = {}
          let expertises = getIdAndNamebyTaxonomyType(
            dataIncluded,
            "taxonomy_term--expertise"
          )
          let locations = getIdAndNamebyTaxonomyType(
            dataIncluded,
            "taxonomy_term--global_locations"
          )
          data.data.included?.filter(
            x => x.type === "taxonomy_term--global_locations"
          )
          let cities = getIdAndNamebyTaxonomyType(
            dataIncluded,
            "taxonomy_term--cities"
          )
          let industries = getIdAndNamebyTaxonomyType(
            dataIncluded,
            "taxonomy_term--industries"
          )
          console.log(profiles)
          obj = {
            profiles: profiles,
            cities: cities,
            expertises: expertises,
            location: locations,
            industries: industries,
            filters: [
              { values: expertises, name: "EXPERTISES" },
              { values: industries, name: "industries" },
              { values: locations, name: "locations" },
              { values: cities, name: "cities" },
            ],
          }
          dispatch({
            type: GET_ALL_PERSONS,
            payload: obj,
          })
        })
        .catch(err => console.log(err))
    }
  }
}

export const addNavbarFilters = filter => {
  return dispatch => {
    dispatch({
      type: ADD_NAVBAR_FILTERS,
      payload: filter,
    })
  }
}

export const filterNavbar = filter => {
  return dispatch => {
    dispatch({
      type: FILTER_NAVBAR_FILTERS,
      payload: filter,
    })
  }
}
export const addFilterTags = tag => {
  return (dispatch, getState) => {
    dispatch({
      type: GET_FILTER_TAGS,
      payload: tag,
    })
  }
}

///--___________________________________________________uselesss

export const filterLeaders = filterByTags => {
  return (dispatch, getState) => {
    const { leaders } = getState().leaders
    let myArrayFiltered = []
    if (filterByTags.length === 1) {
      leaders?.forEach(leader => {
        filterByTags.forEach(filter => {
          if (
            leader?.country.id === filter.id ||
            leader?.city.id === filter.id ||
            leader?.expertise.id === filter.id
          ) {
            myArrayFiltered.push(leader)
          }
        })
      })
    } else if (filterByTags.length === 2) {
      leaders?.forEach(leader => {
        if (
          leader?.country.id === filterByTags[0].id ||
          leader?.city.id === filterByTags[0].id ||
          leader?.expertise.id === filterByTags[0].id
        ) {
          let foundendLeader = leader
          if (
            foundendLeader?.country.id === filterByTags[1].id ||
            foundendLeader?.city.id === filterByTags[1].id ||
            foundendLeader?.expertise.id === filterByTags[1].id
          ) {
            myArrayFiltered.push(foundendLeader)
          }
        }
      })
    } else if (filterByTags.length === 3) {
      leaders?.forEach(leader => {
        if (
          leader?.country.id === filterByTags[0].id ||
          leader?.city.id === filterByTags[0].id ||
          leader?.expertise.id === filterByTags[0].id
        ) {
          let foundendLeader = leader
          if (
            foundendLeader?.country.id === filterByTags[1].id ||
            foundendLeader?.city.id === filterByTags[1].id ||
            foundendLeader?.expertise.id === filterByTags[1].id
          ) {
            let foundLeader1 = foundendLeader
            if (
              foundLeader1?.country.id === filterByTags[2].id ||
              foundLeader1?.city.id === filterByTags[2].id ||
              foundLeader1?.expertise.id === filterByTags[2].id
            ) {
              myArrayFiltered.push(foundLeader1)
            }
          }
        }
      })
    } else if (filterByTags.length === 0) {
      myArrayFiltered = [...leaders]
    } else {
      myArrayFiltered = []
    }
    dispatch({
      type: FILTER_LEADERS,
      payload: myArrayFiltered,
    })
  }
}
