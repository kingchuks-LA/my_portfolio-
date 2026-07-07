import { ComponentPropsWithoutRef, forwardRef } from "react";

export type CardProps = ComponentPropsWithoutRef<"article">;

/**
 * Card Component
 *
 * Purpose:
 * Provides the shared visual surface for portfolio content.
 *
 * Responsibility:
 * - Defines the portfolio's shared card surface.
 * - Encapsulates border, border radius, background, padding, and base transition.
 *
 * It does NOT own:
 * - Typography
 * - Layout
 * - Business logic
 * - Content structure
 *
 * Design Principle:
 * Build the shared surface once and allow every child
 * component to inherit the portfolio's visual language.
 *
 * Evolution:
 * This component should evolve only when a repeated
 * surface pattern emerges across multiple features.
 */

const cardStyles =
  "rounded-2xl border border-gray-200 bg-white p-8 transition-colors duration-200";

const Card = forwardRef<HTMLElement, CardProps>(
  ({ className, children, ...props }, ref) => {
    const classes = [cardStyles, className].filter(Boolean).join(" ");

    return (
      <article ref={ref} className={classes} {...props}>
        {children}
      </article>
    );
  }
);

Card.displayName = "Card";

export default Card;
