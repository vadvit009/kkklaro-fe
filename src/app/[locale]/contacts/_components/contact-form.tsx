"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";

import { FieldPlaceholder } from "@/components/common/field-placeholder";
import { InputField } from "@/components/common/input-field";
import { SelectField } from "@/components/common/select-field";
import { TextareaField } from "@/components/common/textarea-field";
import { Button } from "@/components/ui";
import { ContactFormData, contactFormSchema } from "@/types/forms/contact-form";

export function ContactForm() {
  const t = useTranslations("contactsPage");

  const requestTypeOptions = useMemo(
    () => [
      { label: t("requestTypes.bookDemo"), value: "book-a-demo" },
      { label: t("requestTypes.consultation"), value: "consultation" },
      { label: t("requestTypes.partnership"), value: "partnership-program" },
    ],
    [t],
  );

  const schema = useMemo(
    () =>
      contactFormSchema({
        nameRequired: t("validation.nameRequired"),
        emailRequired: t("validation.emailRequired"),
        emailInvalid: t("validation.emailInvalid"),
        requestTypeRequired: t("validation.requestTypeRequired"),
      }),
    [t],
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      requestType: "book-a-demo",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl" noValidate>
      <div className="mb-29 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
        <InputField
          id="name"
          label={t("form.name")}
          placeholder={
            <FieldPlaceholder text={t("form.namePlaceholder")} required />
          }
          error={errors.name?.message}
          wrapperClassName="order-4 md:order-1"
          {...register("name")}
        />

        <InputField
          id="email"
          label={t("form.email")}
          type="email"
          placeholder={
            <FieldPlaceholder text={t("form.emailPlaceholder")} required />
          }
          error={errors.email?.message}
          wrapperClassName="order-2 md:order-2"
          {...register("email")}
        />

        <Controller
          name="requestType"
          control={control}
          render={({ field }) => (
            <SelectField
              id="requestType"
              label={t("form.requestType")}
              placeholder={
                <FieldPlaceholder
                  text={t("form.requestTypePlaceholder")}
                  required
                />
              }
              required
              options={requestTypeOptions}
              value={field.value}
              onChange={field.onChange}
              error={errors.requestType?.message}
              wrapperClassName="order-3 md:order-3"
            />
          )}
        />

        <TextareaField
          id="message"
          label={t("form.message")}
          placeholder={t("form.messagePlaceholder")}
          error={errors.message?.message}
          wrapperClassName="order-1 md:order-4"
          {...register("message")}
        />
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          className="w-full rounded-xl py-7.5 md:w-auto md:px-10 md:py-4"
        >
          {t("form.submit")}
        </Button>
      </div>
    </form>
  );
}
