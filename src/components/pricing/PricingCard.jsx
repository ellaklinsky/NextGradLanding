import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function PricingCard({ plan, index, onSelectPlan }) {
  const isPopular = plan.popular;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "relative rounded-3xl p-8 lg:p-10 border transition-all duration-300",
        isPopular 
          ? "bg-slate-900 border-slate-800 text-white scale-105 shadow-2xl" 
          : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-lg"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Most Popular
          </div>
        </div>
      )}

      <div className="mb-8">
        <h3 className={cn(
          "text-xl font-semibold mb-2",
          isPopular ? "text-white" : "text-slate-900"
        )}>
          {plan.name}
        </h3>
        <p className={cn(
          "text-sm",
          isPopular ? "text-slate-400" : "text-slate-500"
        )}>
          {plan.description}
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-baseline gap-2">
          <span className={cn(
            "text-5xl font-bold tracking-tight",
            isPopular ? "text-white" : "text-slate-900"
          )}>
            {plan.price}
          </span>
          {plan.period && (
            <span className={cn(
              "text-sm",
              isPopular ? "text-slate-400" : "text-slate-500"
            )}>
              {plan.period}
            </span>
          )}
        </div>
        {plan.billing && (
          <p className={cn(
            "text-sm mt-1",
            isPopular ? "text-slate-500" : "text-slate-400"
          )}>
            {plan.billing}
          </p>
        )}
      </div>

      <Button 
        onClick={() => onSelectPlan(plan)}
        className={cn(
          "w-full rounded-full h-12 text-base font-medium mb-8",
          isPopular 
            ? "bg-white hover:bg-slate-100 text-slate-900" 
            : "bg-slate-900 hover:bg-slate-800 text-white"
        )}
      >
        {plan.cta}
      </Button>

      <div className="space-y-4">
        <p className={cn(
          "text-sm font-semibold",
          isPopular ? "text-slate-300" : "text-slate-700"
        )}>
          {plan.featuresTitle}
        </p>
        <ul className="space-y-3">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check className={cn(
                "h-5 w-5 flex-shrink-0 mt-0.5",
                isPopular ? "text-emerald-400" : "text-emerald-600"
              )} />
              <span className={cn(
                "text-sm",
                isPopular ? "text-slate-300" : "text-slate-600"
              )}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}