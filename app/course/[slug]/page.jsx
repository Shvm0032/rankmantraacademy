import CareerGuidanceSection from '@/components/courses/CareerGuidanceSection'
import CertificationsSection from '@/components/courses/CertificationsSection'
import ComparisonSection from '@/components/courses/ComparisonSection'
import CourseFeesSection from '@/components/courses/CourseFeesSection'
import CoursesHero from '@/components/courses/CoursesHero'
import CurriculumSection from '@/components/courses/CurriculumSection'
import RightSideForm from '@/components/courses/RightSideForm'
import RightSideSummery from '@/components/courses/RightSideSummery'
import WayChooseUsSection from '@/components/courses/WayChooseUsSection'
import React from 'react'

const page = () => {
    return (
        <>
            <CoursesHero />
            <div className='md:flex items-start justify-between gap-5 relative max-w-7xl mx-auto py-4 md:py-16'>
                <div className='w-full md:w-[70%] px-6'> 
                    <WayChooseUsSection />
                    <CurriculumSection />
                    <ComparisonSection />
                    <CertificationsSection />
                    <CourseFeesSection   />
                    <CareerGuidanceSection   />
                </div>
                <div className='w-full md:w-[30%] sticky top-5 px-6'>
                    <RightSideForm />
                    <RightSideSummery />
                </div>
            </div>
        </>
    )
}

export default page
