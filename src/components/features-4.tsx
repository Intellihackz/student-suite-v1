import { Cpu, Fingerprint, Pencil, Sparkles, Zap } from 'lucide-react'

export default function Features() {
    return (
        <section id='features' className="py-12 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Essential Tools for Smarter Student Life</h2>
                    <p>StudentSuite is more than just a scheduler it&apos;s your all-in-one academic toolkit. From managing your timetable to tracking assignments, we&apos;ve got you covered.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="size-4" />
                            <h3 className="text-sm font-medium">Fast & Efficient</h3>
                        </div>
                        <p className="text-sm">Seamlessly organize your tasks and deadlines in one place.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="size-4" />
                            <h3 className="text-sm font-medium">Smart Scheduling</h3>
                        </div>
                        <p className="text-sm">Automatically convert timetables into calendar events and never miss a class.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Fingerprint className="size-4" />

                            <h3 className="text-sm font-medium">Secure & Reliable</h3>
                        </div>
                        <p className="text-sm">Your data is encrypted and always accessible when you need it.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Pencil className="size-4" />

                            <h3 className="text-sm font-medium">Customization</h3>
                        </div>
                        <p className="text-sm">Tailor StudentSuite to fit your workflow and study habits.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="size-4" />

                            <h3 className="text-sm font-medium">AI-Powered Assistance</h3>
                        </div>
                        <p className="text-sm">Get smart recommendations to optimize your schedule and study time.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
